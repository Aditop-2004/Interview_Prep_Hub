import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "./Rating";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const Profile = ({ userId }) => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "lightblue", // Change background color to light blue
            borderRadius: "16px", // Optional: maintain rounded corners if desired
          },
        }}
      >
        <DialogTitle>
          <h2 style={{ fontSize: "50px" }}>User Details</h2>
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : user ? (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h6">Name: {user.name}</Typography>
                <Typography variant="h6">Email: {user.email}</Typography>
                <Typography variant="h6">
                  Area of Interest: {user.areaOfInterest}
                </Typography>
                <Typography variant="h6">
                  Achievements: {user.achievements}
                </Typography>
                <Typography variant="h6">
                  <div style={{display:"flex"}}>Rating: <Rating stars={user.rating} />
                  </div>
                </Typography>
              </Box>
              {user.profile_pic && (
                <Box ml={2}>
                  <img
                    src={user.profile_pic}
                    alt="Profile"
                    width="100"
                    style={{
                      border: "2px solid #000", // Add border to the image
                      borderRadius: "8px", // Optional: add some rounding to the border corners
                    }}
                  />
                </Box>
              )}
            </Box>
          ) : (
            <Typography variant="body1">No user data found.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
