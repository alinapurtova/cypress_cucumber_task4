# Telnyx Cypress Tests for Task 3

## Summary  
This repository contains **15 automated end-to-end tests** for the [Telnyx](https://telnyx.com) website, written in **Cypress+Cucumber** using the **POM** pattern.  
The tests validate UI functionality, navigation, forms, and interactive features across multiple Telnyx pages such as Home, Products, Contact Us, Global Coverage, and more.

---

## Requirements  

Before running the tests, make sure you have the following installed:

- **Node.js** (>= 18.0.0)
- **Cypress**
- **Cucumber**
- **npm**
- **Git**

---

## Installation Steps  

**Clone the repository:**
```bash
git clone https://github.com/alinapurtova/cypress_cucumber_task4.git
```
**Setup**
```bash
npm install
```
**Run tests locally**
```bash
npm run cypress:open
```

**Run headless tests**
```bash
npm run cypress:run
```
**Run with report**
```bash
npm run test:report
```

---

## Tests Summary

### HomePage
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-001** | Verify user can navigate to the Pricing page from the header                                     |
| **TC-004** | Verify cookie banner appears and can be accepted                                               |
| **TC-008** | Verify "Call your agent" button scrolls to the interactive tool demo section                     |
| **TC-009** | Verify that the “Text to Speech” feature works correctly with valid data                         |

### Sign Up form
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-002** | Verify that the Sign Up page opens correctly                                                    |
| **TC-003** | Verify Sign Up form validation with empty submit                                                |

### Contact Us form
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-005** | Verify the Contact Us form is visible and functional                                           |

### Resources
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-006** | Verify search bar returns results for a keyword on the Resources page                           |

### Chat Widget
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-007** | Verify that the chat/contact widget appears and functions correctly                             |

### Liveperson Customer Story video
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-010** | Verify video playback functionality on the Liveperson Customer Story page                        |

### Global Coverage page
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-011** | Submit "Download full coverage" form with valid data on the Global Coverage page                 |
| **TC-012** | Submit "Download full coverage" form with invalid email on the Global Coverage page             |
| **TC-015** | Filtering Global Coverage table by country                                                     |

### Solutions page
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-013** | Verify search functionality on the “All Solutions” page on Telnyx                                 |

### RCS page
| Test ID    | Description                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------|
| **TC-014** | Verify FAQ section functionality on the RCS page                                               |


## CI/CD
Tests are executed automatically via GitHub Actions with results reported to the branch gh-pages and uploaded to Pages.