// Optional chaining (??) falls back only if left side is null or undefined
// ?? does not care about "", 0, false

const user = {
  profile: {
    name: "",
    preferences: {
      theme: null,
    },
  },
};

const theme =
  user?.profile?.preferences?.theme ?? user?.profile?.name ?? "default-theme";
console.log(theme); // ""

const secondUser = { settings: { count: 0, enabled: true } };
const result =
  secondUser?.settings?.count ?? secondUser?.settings?.enabled ?? false;
console.log(result); // 0

const themeWithOR =
  user?.profile?.preferences?.theme || user?.profile?.name || "default-theme";
console.log(themeWithOR); // "default-theme"
