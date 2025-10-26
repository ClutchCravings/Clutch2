# Security Policy

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do not** create a public GitHub issue for the vulnerability
2. Email the maintainers directly at [security@yourproject.com]
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if any)

## Security Considerations

This application handles:
- Twitch OAuth authentication tokens
- User session data
- Stream access permissions

### Best Practices Implemented

- Secure token storage and handling
- HTTPS-only communication
- Input validation and sanitization
- Proper error handling without information leakage
- Regular dependency updates

### What We Don't Store

- User passwords (OAuth only)
- Sensitive personal information
- Stream content or chat messages

## Response Timeline

- Initial response: Within 48 hours
- Status update: Within 7 days
- Resolution: Varies based on complexity

## Disclosure Policy

We follow responsible disclosure practices:
1. Vulnerability reported privately
2. Issue investigated and confirmed
3. Fix developed and tested
4. Security advisory published
5. Public disclosure after fix is available

Thank you for helping keep our project secure!