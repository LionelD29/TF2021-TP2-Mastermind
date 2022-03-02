package be.technifutur.mastermindLeaderboard.servlets;

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(filterName = "FilterCORS", value = "/*")
public class FilterCORS implements Filter {
    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {

        HttpServletResponse responses = (HttpServletResponse) response;
        responses.setHeader("Access-Control-Allow-Origin", "*");
        responses.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        responses.setHeader("Access-Control-Max-Age", "3600");
        responses.setHeader("Content-Type","application/json");
        responses.setHeader("Access-Control-Allow-Headers", "origin,Content-Type,accept,authorization,x-requested-with");
        chain.doFilter(request, responses);
    }
}