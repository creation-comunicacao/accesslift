import { execFileSync } from 'node:child_process';

// Test-only adapter: the email implementation runs in PHP, not Node.js.
export function buildInquiryEmail(kind: string, values: Record<string, unknown>) {
  return JSON.parse(execFileSync(process.env.PHP_BIN || 'php', ['php/tests/email-bridge.php'], {
    input: JSON.stringify({ kind, values }), encoding: 'utf8',
  }));
}
