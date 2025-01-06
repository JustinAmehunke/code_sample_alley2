

export const earnData = [
  
    {
      category: "Tasks list",
      tasks: [
        {
          title: "Join Game News / Updates",
          points: 5000,
          image: "telegram",
          description: "Stay updated with the latest news and announcements",
          callToAction: "Join channel",
          type: "TELEGRAM",
          taskData: {
            link: "https://t.me/game_news",
            chatId: "game_news"
          },
          isActive: true  
        },
        {
          title: "Follow our X",
          points: 5000,
          image: "twitter",
          description: "Follow me on X (formerly Twitter) for real-time updates and community engagement.",
          callToAction: "Follow on X",
          type: "VISIT",
          taskData: {
            link: "https://x.com/"
          },
          isActive: true  
        },
        {
          title: "Invite 3 friends",
          points: 25000,
          image: "friends",
          description: "Invite your friends to join the our community and earn bonus points for each successful referral.",
          callToAction: "Invite friends",
          type: "REFERRAL",
          taskData: {
            friendsNumber: 3
          },
          isActive: true  
        }
      ]
    },
  ];