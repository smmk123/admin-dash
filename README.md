# Admin Dashboard v1.0

This project is an Admin Dashboard for User Management that allows you to view a list of users and their statistics. It provides a user-friendly interface to display user data and key metrics. The dashboard features resizable and rearrangeable UI elements. The grid settings are saved to local storage and persist after a refresh. There is also a convenient scroll-to-top arrow for mobile devices, making it accessible on phones as well.

## Features

- User List: View a list of users, including their names and email addresses.
- User Statistics: Display various statistics related to user activity, such as the last user to log in, the number of users logging in today, the average user frequency, and the count of bad logins.
- Responsive Design: The dashboard is designed to be responsive and adapt to different screen sizes, providing a consistent user experience across devices.
- Resizable and Rearrangeable Layout: The dashboard utilizes the `react-grid-layout` library to provide resizable and rearrangeable grid layout functionality. You can customize the layout by clicking and dragging the components.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Material-UI: A UI component library for React that provides pre-designed components and styling.
- react-grid-layout: A powerful grid layout library for React that enables resizable and rearrangeable components.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/smmk123/admin-dash`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and visit: `http://localhost:3000`

Note: The project uses a fake backend implementation to simulate fetching user data and statistics. The backend functions are included in the `data` directory.

## Future Enhancements

- Sales Dashboard: Add a sales dashboard to display sales-related metrics and charts.

Feel free to contribute to the project by submitting pull requests or suggesting improvements.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).