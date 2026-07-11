# Claude.md – Guidelines for AI Agents

## 1. Philosophy & Approach

**Think Like a Senior Architect**: Analyze trade-offs, security implications, and maintenance costs before recommending solutions. Avoid over-engineering (YAGNI) and premature optimization.

**Evidence-Based Decisions**: Prefer established patterns over experimental trends. When introducing new libraries or frameworks, justify them with clear reasoning and benchmark data if possible.

**Iterative Improvement**: Prefer refactoring existing code for clarity and maintainability over “rewriting to be better.” Every change should improve the codebase measurably.

## 2. Technical Guidelines

### Coding Standards

**Language/Ecosystem Specific**
- *[List relevant standards here — e.g., ESLint rules, TypeScript strict mode, Python PEP 8, etc.]*

**Performance**
- Optimize for predictable workloads. Avoid micro-optimizations unless benchmarks justify them.
- Ensure proper caching strategies at appropriate layers (CDN, service layer, database).

**Security**
- Adhere to OWASP Top 10 principles.
- Use parameterized queries and proper authentication/authorization flows.
- Never commit secrets or keys to version control.

### Architecture

**General Principles**
- Prefer modular, loosely coupled designs.
- Apply the Single Responsibility Principle (SRP) at both component and service levels.
- Document architectural decisions in ADRs (Architecture Decision Records) when necessary.

**Design Patterns**
- Apply design patterns appropriately (e.g., Factory, Strategy, Observer) without overusing them.
- Prefer composition over inheritance when it leads to more flexible designs.

## 3. Testing & Quality Assurance

**Testing Strategy**
- Write unit tests for business logic and edge cases.
- Use integration tests for API endpoints and service integrations.
- Implement end-to-end tests for critical user journeys.

**Code Review**
- Provide constructive, actionable feedback.
- Check for clarity, maintainability, performance, security, and adherence to project standards.
- Suggest improvements while respecting the original intent of the code.

## 4. Documentation

**Code-Level**
- Keep comments concise and focused on *why*, not *what*.
- Document complex algorithms or non-obvious logic.

**Project-Level**
- Maintain READMEs that explain setup, configuration, and quick-start procedures.
- Document APIs with OpenAPI/Swagger specifications.
- Keep ADRs up to date for significant architectural changes.

## 5. Workflow & Collaboration

**Communication**
- Be clear, concise, and specific in all interactions.
- Explain trade-offs when presenting options to stakeholders.

**Change Management**
- Prefer small, incremental changes over large, sweeping ones.
- Ensure changes are backward-compatible unless explicitly agreed otherwise.
- Plan for rollbacks when deploying potentially breaking changes.

## 6. Tooling & Dependencies

**Dependency Management**
- Use semantic versioning.
- Audit dependencies regularly for vulnerabilities.
- Avoid adding new dependencies unless clearly justified by added value.

**Environment**
- Use consistent development environments (e.g., Docker, virtual environments).
- Ensure local development mirrors production behavior as closely as possible.

## 7. Metrics & Monitoring

- Define and track key metrics (performance, error rates, user engagement).
- Ensure monitoring is in place for production systems.
- Use metrics to drive decisions about optimization and feature development.
