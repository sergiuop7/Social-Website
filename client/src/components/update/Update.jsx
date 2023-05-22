import { useState } from "react";
import { makeRequest } from "../../axios";
import "./update.scss";
import { useMutation, useQueryClient } from 'react-query';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Update = ({ setOpenUpdate, user }) => {
  const [texts, setTexts] = useState({
    name: "",
    coverPic: "",
    profilePic: "",
    city: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTexts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let coverUrl = texts.coverPic || user.coverPic;
    let profileUrl = texts.profilePic || user.profilePic;

    const updatedUser = {
      ...user,
      name: texts.name,
      city: texts.city,
      website: texts.website,
      coverPic: coverUrl,
      profilePic: profileUrl,
    };

    mutation.mutate(updatedUser);
    setOpenUpdate(false);
  };

  return (
    <div className="update">
      Update
      <form>
        <label htmlFor="coverPic">Change your cover picture:</label>
        <input
          type="text"
          name="coverPic"
          id="coverPic"
          onChange={handleChange}
        />

        <label htmlFor="profilePic">Change your profile picture:</label>
        <input
          type="text"
          name="profilePic"
          id="profilePic"
          onChange={handleChange}
        />

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />

        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" onChange={handleChange} />

        <label htmlFor="website">Website:</label>
        <input
          type="text"
          name="website"
          id="website"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Update</button>
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>
    </div>
  );
};

export default Update;
