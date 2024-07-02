import { config } from 'dotenv';
config();
import express from 'express';
const app = express();
import cors from 'cors';
import axios from 'axios';

app.use(cors({ origin: ['http://localhost:9000'] }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const headers = [
  {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    authorization:
      'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
    'content-type': 'application/json',
    priority: 'u=1, i',
    'sec-ch-ua':
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-client-transaction-id':
      'OMEEdxWJ5Xxt1ZbeVm4V9eZK/Bp+pLK1j5h1jvKRREVRytBrAYcpcSMjHQyfW3Ceuo9x1TnDHn5NZzHbFnH/Fc/S2juMOw',
    'x-client-uuid': '4c91a538-2529-4dcc-a1ce-a1feb4332bb0',
    'x-csrf-token':
      '640d77249e42827d5e3820d730f2a87ef92d75994f0f8117c5498e8fe12e59efec521d190f983bdd8776a12f90775b3ec2a45366406a9f40f2e108d09ae49e1297ffd8d3a5acf03cbab762ffecc44607',
    'x-twitter-active-user': 'yes',
    'x-twitter-auth-type': 'OAuth2Session',
    'x-twitter-client-language': 'en',
    cookie:
      'ads_prefs="HBERAAA="; remember_checked_on=1; twid=u%3D1296879207977324544; auth_token=fa728d8065ec4b250749d542eb07e6bc9e8551c3; ct0=640d77249e42827d5e3820d730f2a87ef92d75994f0f8117c5498e8fe12e59efec521d190f983bdd8776a12f90775b3ec2a45366406a9f40f2e108d09ae49e1297ffd8d3a5acf03cbab762ffecc44607; guest_id=v1%3A169056346508101181; des_opt_in=Y; guest_id_marketing=v1%3A169056346508101181; guest_id_ads=v1%3A169056346508101181; lang=en; personalization_id="v1_iR+yRY+VXbBM7JMzhlDzYg=="; arp_scroll_position=10',
    Referer: 'https://twitter.com/jh3yy/status/1788301257100173483',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
  {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    authorization:
      'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
    'content-type': 'application/json',
    priority: 'u=1, i',
    'sec-ch-ua':
      '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-client-transaction-id':
      'URncW074ufbCZyiKQ2L/Xz67RY5e/eZ/UMugKrWWO9yNzAIWajpTISc6GJT1dhlTArn4oFCNirb6q1uT1nKx1mR4aYwiUg',
    'x-csrf-token':
      '6da3e5855d35de25301575bb87fefc94bb098a9fcf70e34bf2f2ce33ffafd880b121cc3aedbe4f0c7bd0c93b7e12948f8e0975547aa14c34cc02c096807466277c7449db95427e6690b63f31dca2d465',
    'x-twitter-active-user': 'yes',
    'x-twitter-auth-type': 'OAuth2Session',
    'x-twitter-client-language': 'en',
    cookie:
      'guest_id_marketing=v1%3A171553857549987418; guest_id_ads=v1%3A171553857549987418; guest_id=v1%3A171553857549987418; gt=1789724619957785053; _ga=GA1.2.1393614285.1715538577; _gid=GA1.2.686132976.1715538577; _twitter_sess=BAh7BiIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7AA%253D%253D--1164b91ac812d853b877e93ddb612b7471bebc74; kdt=6D84wmJW2dMIpIs22KHKmVDcT2aK0Kk6lTx5eWBp; auth_token=c522beaf24bf2e265fd91c16427d2cf3086ef41e; ct0=6da3e5855d35de25301575bb87fefc94bb098a9fcf70e34bf2f2ce33ffafd880b121cc3aedbe4f0c7bd0c93b7e12948f8e0975547aa14c34cc02c096807466277c7449db95427e6690b63f31dca2d465; lang=en; twid=u%3D1789727098116112385; personalization_id="v1_UjgFvOiDTwUyOfU5RhjlFg=="',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
];
let headersIndex = 0;
const getPostInformation = async (statusId: string) => {
  try {
    const endpoint = `https://twitter.com/i/api/graphql/zJvfJs3gSbrVhC0MKjt_OQ/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${statusId}%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_media_interstitial_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%2C%22withArticlePlainText%22%3Afalse%7D`;
    const { data } = await axios.get(endpoint, {
      headers: headers[headersIndex],
    });
    const information =
      data?.data?.threaded_conversation_with_injections_v2?.instructions?.[0]
        ?.entries?.[0]?.content?.itemContent?.tweet_results?.result;

    const name = information?.core?.user_results?.result?.legacy?.name;
    const screen_name =
      information?.core?.user_results?.result?.legacy?.screen_name;
    const avatar =
      information?.core?.user_results?.result?.legacy?.profile_image_url_https;
    const full_text = information?.legacy?.full_text;
    const bookmark_count = information?.legacy?.bookmark_count;
    const favorite_count = information?.legacy?.favorite_count;
    const quote_count = information?.legacy?.quote_count;
    const reply_count = information?.legacy?.reply_count;
    const retweet_count = information?.legacy?.retweet_count;

    return {
      author: {
        name,
        screen_name,
        avatar,
      },
      full_text,
      favorite_count,
      reply_count,
      quote_count,
      retweet_count,
      bookmark_count,
    };
  } catch (error) {
    console.log(error);
    if (headersIndex === headers.length - 1) headersIndex = 0;
    else headersIndex++;
  }
};

app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const data = await getPostInformation(id);

    res.send({ data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
