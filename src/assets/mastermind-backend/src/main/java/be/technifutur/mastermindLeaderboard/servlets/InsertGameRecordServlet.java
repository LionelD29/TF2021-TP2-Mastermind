package be.technifutur.mastermindLeaderboard.servlets;

import be.technifutur.mastermindLeaderboard.models.GameRecord;
import be.technifutur.mastermindLeaderboard.services.MastermindService;
import be.technifutur.mastermindLeaderboard.services.MastermindServiceImpl;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "InsertGameRecordServlet", value = "/leaderboard/add")
public class InsertGameRecordServlet extends HttpServlet {
    MastermindService service = MastermindServiceImpl.getInstance();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson gson = new Gson();
        service.insertGameRecord(
                gson.fromJson(request.getReader(), GameRecord.class)
        );
    }
}