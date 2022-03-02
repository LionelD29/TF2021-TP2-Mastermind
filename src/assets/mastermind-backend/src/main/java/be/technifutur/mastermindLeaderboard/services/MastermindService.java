package be.technifutur.mastermindLeaderboard.services;

import be.technifutur.mastermindLeaderboard.models.GameRecord;
import java.util.List;

public interface MastermindService {
    // Get all
    List<GameRecord> getAll();

    // Insert
    boolean insertGameRecord(GameRecord gameRecord);
}
