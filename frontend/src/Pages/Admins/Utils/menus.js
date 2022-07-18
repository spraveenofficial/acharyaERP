export const itemsForAdminsMenu = (role) => {
  if (role === "ADMIN") {
    return [
      {
        name: "Make Moderator",
        params: "MODERATOR",
      },
      {
        name: "Remove Admin",
        params: "STUDENT",
      },
    ];
  } else if (role === "MODERATOR") {
    return [
      {
        name: "Make Admin",
        params: "ADMIN",
      },
      {
        name: "Remove Moderator",
        params: "STUDENT",
      },
    ];
  }
};
