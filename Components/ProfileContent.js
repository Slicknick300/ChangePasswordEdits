import React from "react";
import classes from "./ProfileContent.module.css";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

function ProfileContent() {
	return (
		<div>
			<h1> Profile Page</h1>
			<container className={classes.profile}>
				<row>
					<div>
						<img
							src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw0NZAmfBvkzl55ery9JTRKQ&ust=1669925433444000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNj70JPb1vsCFQAAAAAdAAAAABAE"
							alt = "Profile picture"
						/>
						if (user !== null) {
							user.providerData.forEach((profile) => {
								console.log ("Username: " + profile.providerID);
							})
						}	
						<div>
							<Link to="/changepassword">
								Change Password?
							</Link>
						</div>
						<div>
							<h3>
								{" "}
								To Do List
							</h3>
							<ol class = "center">
								<li>Task 1 </li>
								<li>Task 2 </li>
								<li>Task 3 </li>
								<li>Task 4 </li>
							</ol>
							<br></br>
							<h3>
								{" "}
								Task Completed
								this week
							</h3>
							<p align = "center"> 0 </p>
						</div>
					</div>
					<div>
						<div>
							<h3 className="card">
								{" "}
								Achievment List
							</h3>
							<table>
								<tr>
									<td>
										{" "}
										Complete
										your
										first
										task
									</td>
									<td>
										{" "}
										Incomplete
									</td>
								</tr>
								<tr>
									<td>
										{" "}
										Complete
										all
										of
										your
										tasks
										in
										one
										week
									</td>
									<td>
										{" "}
										Incomplete
									</td>
								</tr>
								<tr>
									<td>
										{" "}
										Don't
										skip
										any
										tasks
										in
										one
										week
									</td>
									<td>
										{" "}
										Incomplete
									</td>
								</tr>
							</table>
						</div>
						<h3 className="card">Badges</h3>
						<h5>Achievement Badge</h5>
						<h6> Insert badge</h6>
						<h5>Active Badge</h5>
						<h6> Insert badge</h6>
						<h5>Follow Through Badge</h5>
						<h6> Insert badge</h6>
						<h5>Refer a friend</h5>
						<h6> Insert badge</h6>
					</div>
				</row>
			</container>
		</div>
	);
}

export default ProfileContent;
