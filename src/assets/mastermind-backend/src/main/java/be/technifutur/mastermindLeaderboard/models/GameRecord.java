package be.technifutur.mastermindLeaderboard.models;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GameRecord {
    private long gameId;
    private String playerName;
    private int totalAttempts;
    private int attemptsLeft;
    private boolean hasWon;
}
