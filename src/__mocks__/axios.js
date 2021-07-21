const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Akshay",
          last: "Sharma",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/41.jpg",
        },
        login: {
          username: "TheGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
