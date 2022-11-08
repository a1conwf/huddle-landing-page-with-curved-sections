import iconCommunities from "../assets/svg/icon-communities.svg";
import iconMessages from "../assets/svg/icon-messages.svg";
import growTogetherImg from "../assets/svg/illustration-grow-together.svg";
// import growTogetherBgImg from "../assets/svg/grow-together-curve-desktop.svg";
import flowingConversationImg from "../assets/svg/illustration-flowing-conversation.svg";
import yourUsersImg from "../assets/svg/illustration-your-users.svg";

export const stats = [
	{
		id: "1",
		icon: iconCommunities,
		quantity: "1.4k+",
		text: "Communities Formed",
	},
	{
		id: "2",
		icon: iconMessages,
		quantity: "2.7m+",
		text: "Messages Sent",
	},
];

export const features = [
	{
		id: "1",
		img: growTogetherImg,
		title: "Grow Together",
		text: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
	},
	{
		id: "2",
		img: flowingConversationImg,
		title: "Flowing Conversations",
		text: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
	},
	{
		id: "3",
		img: yourUsersImg,
		title: "Your Users",
		text: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
	},
];
