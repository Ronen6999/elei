
(async () => {
	switch (command) {
      case "tqtt":
      case "tq":
      case "repo":
      case "owner":
        {
          if (querie === "help") {
            await citel.reply(
              `*❗Command:*   Developers List\n*🍀Aliases* ${
                prefix + command
              },-tq,-repo\n*🧩Category:* General\n*🛠️Usage:* ${
                prefix + command
              }\n\n*📚Description:* Shows list of Developers of Elei.`
            );
            return;
          }

          anu = `Hello, my ${pushname} ${LangG.greet}.

*━━━ 『 *ELEI DEVS* 』 ━━━*
*⭐Ronen Singha:* For Development and Base and Modules.
*⭐Based bot:* Based on Engalei.

 *I hope you liked our bot💕. Enjoy guys!*`;
          let message = await prepareWAMessageMedia(
            {
              image: fs.readFileSync("./assets/SocialLogo 1.png"),
            },
            {
              upload: Void.waUploadToServer,
            }
          );

          const template = generateWAMessageFromContent(
            citel.chat,
            proto.Message.fromObject({
              templateMessage: {
                hydratedTemplate: {
                  imageMessage: message.imageMessage,

                  hydratedContentText: anu,
                  hydratedFooterText: LangG.BotName,
                  hydratedButtons: [
                    {
                      urlButton: {
                        displayText: "Web",
                        url: "",
                      },
                    },
                    {
                      urlButton: {
                        displayText: "⭐Support Gc",
                        url: "https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO",
                      },
                    },
                    {
                      quickReplyButton: {
                        displayText: "Menu",
                        id: `${prefix}help`,
                      },
                    },
                    {
                      quickReplyButton: {
                        displayText: "Alive",
                        id: `${prefix}alive`,
                      },
                    },
                  ],
                },
              },
            }),
            {
              userJid: citel.chat,
            }
          );
          Void.relayMessage(citel.chat, template.message, {
            messageId: template.key.id,
          });
        }
        break;
        }
        })()
