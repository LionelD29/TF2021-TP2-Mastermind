package be.technifutur.mastermindLeaderboard.servlets;

import be.technifutur.mastermindLeaderboard.services.MastermindService;
import be.technifutur.mastermindLeaderboard.services.MastermindServiceImpl;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "GetAllGameRecordsServlet", value = "/leaderboard")
public class GetAllGameRecordsServlet extends HttpServlet {
    MastermindService service = MastermindServiceImpl.getInstance();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson gson = new Gson();

        response.setHeader("Access-Control-Allow-Origin", "*");

        response.setContentType("application/json");
        response.getWriter().write(
            gson.toJson(service.getAll())
        );
        response.getWriter().close();
    }
}