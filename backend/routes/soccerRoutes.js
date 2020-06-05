import { 
    addNewPlayer, 
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
        .get(getPlayers);

    app.route('/player/:playerId')
        .get(getPlayerById)
        .put(updatePlayer)
        .delete(deletePlayer);
}

export default routes;