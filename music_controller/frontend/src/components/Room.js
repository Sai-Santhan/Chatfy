import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Grid, Button, Typography } from "@material-ui/core";

const Room = (props) => {
    const { roomCode } = useParams();

    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    useEffect(() => {
        fetch("/api/get-room" + "?code=" + roomCode)
            .then((response) => response.json())
            .then((data) => {
                setVotesToSkip(data.votes_to_skip);
                setGuestCanPause(data.guest_can_pause);
                setIsHost(data.is_host);
            });
    }, []);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Code: {this.roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Votes: {this.state.votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Guest Can Pause: {this.state.guestCanPause.toString()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Typography variant="h6" component="h6">
                    Host: {this.state.isHost.toString()}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.leaveButtonPressed}
                >
                    Leave Room
                </Button>
            </Grid>
        </Grid>
    );
};

export default Room;
