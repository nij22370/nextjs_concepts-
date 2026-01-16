import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
type MockUsers = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log({ authObj, userObj });

  const res = await fetch("https://6969c83c3a2b2151f846352e.mockapi.io/users");
  const users: MockUsers[] = await res.json();

  async function addUsers(formData: FormData) {
    "use server";

    const name = formData.get("name");

    const res = await fetch(
      "https://6969c83c3a2b2151f846352e.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUsers = await res.json();
    revalidatePath("mock-users");
    console.log(newUsers);
  }

  return (
    <div className="py-10">
      <form action={addUsers} className="mb-4">
        <input type="text" name="name" required className="border p-2 mr-2" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add User
        </button>
      </form>

      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-md text-gray-700">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
