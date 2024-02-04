const dummyApiData = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
};

function DataOwner() {
  return new Promise((res, rej) => {
    if (dummyApiData) setTimeout(res(dummyApiData), 500);
    else rej("error bro!!!");
  });
}

export default DataOwner;
