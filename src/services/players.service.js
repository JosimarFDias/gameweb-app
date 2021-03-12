import http from "../http-common";

class PlayersDataService {
    getAll() {
        return http.get("/players");
    }

    getByGame(gameId) {
        return http.get(`/players/${gameId}`);
    }

    create(data) {
        console.log({"data": data})
        const config = {
            method: 'post',
            url: '/players',
            data: data,
            headers: {
                
            }
        }
        return http.post('/players', data, config);
    }
}

export default new PlayersDataService();
