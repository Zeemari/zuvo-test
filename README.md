# Zuvo Test

This project is a simple Vue.js application that displays a list of users fetched from a public API (JSONPlaceholder). It includes features for searching, sorting, and viewing user details in a modal.

## Features

* **User Listing:** Displays a table of users with their names, emails, and company names.
* **Search:** Allows users to search for users by name.
* **Sorting:** Enables users to sort the user list in ascending or descending order by name.
* **User Details Modal:** Shows detailed information about a user (email, phone, company) in a modal when clicked.
* **Loading and Error Handling:** Displays loading indicators and error messages as needed.

## Project Structure

* `src/components/`: Contains Vue.js components like `SearchSort.vue` and `UserModal.vue`.
* `src/stores/`: Contains the Pinia store (`storeUsers.js`) for managing user data and API calls.
* `src/views/`: Contains the main view, `HomePage.vue`.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <https://github.com/Zeemari/zuvo-test.git>
    cd zuvo-test
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    yarn serve
    ```
    This will start the development server, and you can view the application in your browser at `http://localhost:8080`.

## Building for Production

1.  **Build the application:**
    ```bash
    yarn build
    ```
    This will create a `dist` folder containing the production-ready build of your application.

## Linting

1.  **Lint and fix code:**
    ```bash
    yarn lint
    ```
    This will run ESLint to check for code quality issues and automatically fix any that it can.

## File Naming Conventions

For clarity and consistency, use the following naming conventions:

* **Components:** Use PascalCase with `.vue` extension ( `SearchSort.vue`, `UserModal.vue`, `HomePage.vue`).
* **Stores:** Use camelCase with `.js` extension (e.g., `storeUsers.js`).
* **Assets:** Use descriptive names for images and other assets (`logo.png`).
* **Folder Names:** for folder names (`src/components`, `src/stores`, `src/assets`).

## Pinia Store Usage

The `storeUsers.js` file uses Pinia for state management. It fetches user data from the JSONPlaceholder API and provides the data, loading state, and error state to the `HomePage.vue` component.

## Component Communication

* The `SearchSort.vue` component emits events (`updateSearch`, `updateSort`) to communicate search and sort changes to the `HomePage.vue` component.
* The `UserModal.vue` component emits a `close` event to notify the `HomePage.vue` component when the modal is closed.

## Dependencies

* **Vue.js:** The core JavaScript framework.
* **Pinia:** State management library.
* **Axios:** HTTP client for making API requests.

## Contributing

If you'd like to contribute to this project, please feel free to submit a pull request.