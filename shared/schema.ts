import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const games = pgTable("games", {
  id: serial("id").primaryKey(),
  date: timestamp("date").notNull().defaultNow(),
  isActive: boolean("is_active").notNull().default(true),
});

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const gamePlayers = pgTable("game_players", {
  id: serial("id").primaryKey(),
  gameId: integer("game_id").notNull().references(() => games.id),
  playerId: integer("player_id").notNull().references(() => players.id),
  isActive: boolean("is_active").notNull().default(true),
});

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  gameId: integer("game_id").notNull(),
  playerId: integer("player_id").notNull(),
  type: text("type").notNull(), // 'buyin' or 'cashout'
  amount: integer("amount").notNull(), // amount in cents
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const chipDenominations = pgTable("chip_denominations", {
  id: serial("id").primaryKey(),
  gameId: integer("game_id").notNull(),
  denomination: integer("denomination").notNull(), // value in cents
  color: text("color").notNull(),
  count: integer("count").notNull().default(0),
});

export const insertGameSchema = createInsertSchema(games).omit({ id: true });
export const insertPlayerSchema = createInsertSchema(players).omit({ id: true });
export const insertGamePlayerSchema = createInsertSchema(gamePlayers).omit({ id: true });
export const insertTransactionSchema = createInsertSchema(transactions).omit({ id: true, timestamp: true });
export const insertChipDenominationSchema = createInsertSchema(chipDenominations).omit({ id: true });

export type Game = typeof games.$inferSelect;
export type Player = typeof players.$inferSelect;
export type GamePlayer = typeof gamePlayers.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;
export type ChipDenomination = typeof chipDenominations.$inferSelect;

export type InsertGame = z.infer<typeof insertGameSchema>;
export type InsertPlayer = z.infer<typeof insertPlayerSchema>;
export type InsertGamePlayer = z.infer<typeof insertGamePlayerSchema>;
export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type InsertChipDenomination = z.infer<typeof insertChipDenominationSchema>;
