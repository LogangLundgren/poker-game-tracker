# Poker Game Tracker

A comprehensive poker game management application designed to simplify home game tracking and enhance player experience through intuitive financial tracking and real-time data synchronization.

## Features

- **Game Management**: Start and end poker sessions with automatic tracking
- **Player Management**: Global player system that persists across all games
- **Transaction Tracking**: Precise buy-in and cash-out recording with cent-level accuracy
- **Real-time Analytics**: Live P&L tracking and game statistics
- **Historical Data**: Complete game history with detailed transaction breakdowns
- **Player Statistics**: Comprehensive performance metrics and rankings
- **Responsive Design**: Mobile-friendly interface for on-the-go tracking

## Technology Stack

- **Frontend**: React with TypeScript, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Real-time Updates**: TanStack Query for data synchronization
- **Routing**: Wouter for client-side navigation

## Getting Started

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd poker-game-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your database credentials
DATABASE_URL=postgresql://username:password@localhost:5432/poker_tracker
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Usage

### Starting a New Game

1. Navigate to the home page
2. Click "Start New Game" or "Continue Current Game" if one exists
3. Add players to the game
4. Begin tracking buy-ins and cash-outs

### Managing Transactions

- **Buy-ins**: Record when players purchase chips
- **Cash-outs**: Record when players leave with their chips
- **Delete**: Remove incorrect transactions with confirmation

### Viewing Analytics

- **Player Statistics**: Comprehensive P&L tracking and performance metrics
- **Past Games**: Historical game data with expandable transaction details
- **Game Summary**: Real-time pot size and player standings

## Database Schema

The application uses a PostgreSQL database with the following main tables:

- `games`: Game sessions with timestamps and status
- `players`: Global player registry
- `game_players`: Junction table linking players to games
- `transactions`: Buy-in and cash-out records
- `chip_denominations`: Chip count tracking (optional feature)

## API Endpoints

### Games
- `GET /api/games` - List all games
- `POST /api/games` - Create new game
- `PUT /api/games/:id/end` - End a game

### Players
- `GET /api/players` - List all players
- `POST /api/players` - Create new player
- `DELETE /api/players/:id` - Delete player

### Transactions
- `GET /api/transactions` - List all transactions
- `GET /api/transactions/game/:gameId` - Get game transactions
- `POST /api/transactions` - Create transaction
- `DELETE /api/transactions/:id` - Delete transaction

## Development

### Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configurations
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database operations
│   └── db.ts              # Database connection
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Drizzle schema definitions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate migration files

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with modern web technologies for optimal performance
- Designed for home poker game enthusiasts
- Focused on simplicity and accuracy in financial tracking