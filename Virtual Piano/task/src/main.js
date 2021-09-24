document.addEventListener("keydown", function(event) {
  switch (event.code) {
    case "KeyA":
      let audioA = new Audio("audio/A.mp3");
      audioA.play();
      break;
    case "KeyS":
      let audioS = new Audio("audio/S.mp3");
      audioS.play();
      break;
    case "KeyD":
      let audioD = new Audio("audio/D.mp3");
      audioD.play();
      break;
    case "KeyF":
      let audioF = new Audio("audio/F.mp3");
      audioF.play();
      break;
    case "KeyG":
      let audioG = new Audio("audio/G.mp3");
      audioG.play();
      break;
    case "KeyH":
      let audioH = new Audio("audio/H.mp3");
      audioH.play();
      break;
    case "KeyJ":
      let audioJ = new Audio("audio/J.mp3");
      audioJ.play();
      break;
    case "KeyW":
      let audioW = new Audio("audio/W.mp3");
      audioW.play();
      break;
    case "KeyE":
      let audioE = new Audio("audio/E.mp3");
      audioE.play();
      break;
    case "KeyT":
      let audioT = new Audio("audio/T.mp3");
      audioT.play();
      break;
    case "KeyY":
      let audioY = new Audio("audio/Y.mp3");
      audioY.play();
      break;
    case "KeyU":
      let audioU = new Audio("audio/U.mp3");
      audioU.play();
      break;
    default:
      console.error("Warning!");
  }
});