
export function updateMatchScore(matchId, newScore, newWinner) {
  const raw = localStorage.getItem("gameData");
  if (!raw) return false;

  const gameData = JSON.parse(raw);

  const matchIndex = gameData.pastMatches.findIndex(m => m.id === matchId);
  if (matchIndex === -1) return false;

  gameData.pastMatches[matchIndex] = {
    ...gameData.pastMatches[matchIndex],
    score: newScore,
    winner: newWinner,
  };

  localStorage.setItem("gameData", JSON.stringify(gameData));
  return true;
}