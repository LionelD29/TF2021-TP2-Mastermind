package be.technifutur.mastermindLeaderboard.services;

import be.technifutur.mastermindLeaderboard.dataAccess.ConnectionFactory;
import be.technifutur.mastermindLeaderboard.models.GameRecord;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MastermindServiceImpl implements MastermindService {
    // region SINGLETON
    private static MastermindServiceImpl _instance;

    public static MastermindServiceImpl getInstance() {
        return _instance == null ? _instance = new MastermindServiceImpl() : _instance;
    }

    private MastermindServiceImpl() {

    }
    // endregion

    // Get all
    public List<GameRecord> getAll() {
        List<GameRecord> l;

        String query = "SELECT * FROM leaderbord";

        try (
                Connection connection = ConnectionFactory.getConnection();
                Statement statement = connection.createStatement();
                ResultSet rs = statement.executeQuery(query)
        ) {
            l = new ArrayList<>();
            while (rs.next()) {
                l.add(
                        GameRecord.builder()
                                .gameId(rs.getLong("game_id"))
                                .playerName(rs.getString("player_name"))
                                .totalAttempts(rs.getInt("total_attempts"))
                                .attemptsLeft(rs.getInt("attempts_left"))
                                .hasWon(rs.getBoolean("has_won"))
                                .build()
                );
            }
        } catch (SQLException e) {
            l = null;
            e.printStackTrace();
        }
        return l;
    }

    // Insert
    public boolean insertGameRecord(GameRecord gameRecord) {
        boolean insertResult = false;
        String query = "CALL INSERT_GAME_RECORD(?, ?, ?, ?)";

        try (
            Connection connection = ConnectionFactory.getConnection();
            CallableStatement statement = connection.prepareCall(query)
        ) {
            statement.setString(1, gameRecord.getPlayerName());
            statement.setInt(2, gameRecord.getTotalAttempts());
            statement.setInt(3, gameRecord.getAttemptsLeft());
            statement.setBoolean(4, gameRecord.isHasWon());

            if (1 == statement.executeUpdate()) {
                insertResult = true;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return insertResult;
    }
}
