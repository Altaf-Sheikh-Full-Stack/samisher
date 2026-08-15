# Sales Package Builder — New Build

This is a completely new, isolated component.

It follows the approved flow:

Add service
→ choose service
→ choose specific result
→ configure service
→ add to package
→ add another service
→ package summary
→ book meeting

## Services

- Lead Generation
- Meeting Booking
- Closer Service
- Collection Service

## Per-service configuration

- Specific result
- Target industry
- Country / market
- Company size
- Target market
- Target results per month
- Conditional service-specific questions
- Customer value
- Billing model
- Customer lifetime for recurring customers

## Card

Every service card shows:

- Specific result
- Target volume
- Customer economics chart
- Revenue line
- Acquisition-cost line
- Payback marker
- Cost per result
- Cost per month
- Result target
- Customer revenue
- Target profile tags
- Enable / disable
- Edit / remove

## Package summary

Shows:

- Total service cost
- $200 new customer bonus
- Final first-engagement cost
- Pay-per-result explanation
- Trust points
- Book meeting CTA

## Chart library

Uses Recharts.

The existing System components are used for the page foundation:
- Button
- Section
- Text

The feature's own cards/modals/chart components stay isolated.

### Import path

The example assumes the new folder sits next to your `System` folder.

If your actual source tree uses a different relative path, only these three imports in `ServiceBuilder.tsx` need to be adjusted:

```ts
import Button from "../System/Button/Button";
import Section from "../System/Layouts/Section/Section";
import Text from "../System/Texts/Text";
```
