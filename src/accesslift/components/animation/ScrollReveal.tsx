import { useEffect, type ReactNode } from "react";

type ScrollRevealProviderProps = {
  children: ReactNode;
  watchKey: string;
};

const revealSelector = "[data-reveal]";
const revealedClass = "is-revealed";
const enabledClass = "reveal-enabled";

const collectRevealElements = (root: ParentNode) => {
  const elements: HTMLElement[] = [];

  if (root instanceof HTMLElement && root.matches(revealSelector)) {
    elements.push(root);
  }

  elements.push(...Array.from(root.querySelectorAll<HTMLElement>(revealSelector)));

  return elements.filter((element) => !element.classList.contains(revealedClass));
};

export function ScrollRevealProvider({ children, watchKey }: ScrollRevealProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(enabledClass);

    const elements = collectRevealElements(document);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add(revealedClass));
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              collectRevealElements(node).forEach((element) => element.classList.add(revealedClass));
            }
          });
        });
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => mutationObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(revealedClass);
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    const observe = (element: HTMLElement) => observer.observe(element);

    elements.forEach(observe);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            collectRevealElements(node).forEach(observe);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [watchKey]);

  return children;
}
