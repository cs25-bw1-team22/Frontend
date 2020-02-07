const initialState = {
  loginState: {
    isLoading: false,
    isLoggedIn: false,
    error: {}
  },
  signUpState: {
    isLoading: false,
    isSignedUp: false,
    error: {}
  },
  mapState: {
    isLoading: false,
    map: {},
    error: {}
  },
  gameState: {
    isLoading: false,
    location: { uuid: "", name: "", title: "", description: "", players: [] },
    direction: "R",
    bus: "",
    actionLog: [],
    error: {}
  }
};

export default initialState;
