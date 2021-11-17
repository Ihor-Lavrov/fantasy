import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../store/game/actions";
import { selectFutureGames } from "../../store/game/selectors";
import { GamesOverview } from "./components/games";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.fetchGames({ limit: 0, page: 0 }));
  }, [dispatch]);

  const futureGames = useSelector(selectFutureGames);

  return (
    <div>
      <GamesOverview data={futureGames} />
    </div>
  );
};
