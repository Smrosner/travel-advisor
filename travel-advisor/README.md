# Travel Advisor

A React-based travel application that helps users explore and discover places using Google Maps integration.

## Features

- Interactive Google Maps integration using @vis.gl/react-google-maps
- Place search with Google Places Autocomplete API
- Responsive layout with Tailwind CSS
- TypeScript support for type safety

## Tech Stack

- React 18.3
- TypeScript
- Vite
- Tailwind CSS
- Google Maps Platform
  - Maps JavaScript API
  - Places API (Autocomplete)
- ESLint

## Documentation References

- [Google Maps Place Autocomplete Documentation](https://developers.google.com/maps/documentation/javascript/examples/rgm-autocomplete)

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn
- Google Maps API key with the following APIs enabled:
  - Maps JavaScript API
  - Places API

### Installation

1. Clone the repository
1. Install dependencies:

    ```bash
    npm install
    ```

1. Create a `.env` file in the root directory and add your Google Maps API key:

    ```env
    VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
    ```

1. Start the development server:

    ```bash
    npm run dev
    ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```bash
travel-advisor/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── List.tsx
│   │   ├── Map.tsx
│   │   ├── PlaceDetails.tsx
│   │   └── Search.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
└── ...config files
```

## ESLint Configuration

The project uses ESLint with TypeScript support. The configuration includes:

- React Hooks plugin
- React Refresh plugin
- TypeScript-specific rules

For detailed ESLint configuration, see `eslint.config.js`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
