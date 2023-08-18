import axios from "axios";
import { fetchUser } from "./user.actions";
const fetchData = async (input: string, userId: string) => {
  const userInfo = await fetchUser(userId);

  const response = await axios.post(
    "https://chimeragpt.adventblocks.cc/api/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `my weight, height, age, gender and bloodgroup is ${userInfo.weight}, ${userInfo.height}, ${userInfo.age}, ${userInfo.gender} and ${userInfo.bloodGroup} respectively ${input} `,
        },
      ],
      allow_fallback: true,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer r3whrEgP_xmKrJhyElbUWMTWPNxnqTXSjECYOkvty_U`,
      },
    }
  );

  return response.data.choices[0].message.content;
};

export default fetchData;
