"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
app.use((0, cors_1.default)({ origin: ['http://localhost:9000'] }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const headers = [
    {
        accept: '/',
        'accept-language': 'en-US,en;q=0.9,bn;q=0.8',
        authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        'content-type': 'application/json',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-client-transaction-id': 'WlCxqEvFXhBF5J3yLqOhdLMhydPJAI2ZC+dlmbJ0K2WRf60HCD78Mc9goRwQDTFulkU1bVgjMTZQPCjfRCnWmdLWNWx9WQ',
        'x-client-uuid': '290815ce-6890-4e81-b1c1-345f9cb467a0',
        'x-csrf-token': 'c472986f1790c3a09db82c6c13abc021e13cc962d65b72fd353fb5a8f9fd2e7476f8570841b8c675e8c71c735f6d52dda9661098b28f1f1b26c684dd0a06c9297016ec2b5032a58c90c6d7cc21cb457e',
        'x-twitter-active-user': 'yes',
        'x-twitter-auth-type': 'OAuth2Session',
        'x-twitter-client-language': 'en',
        cookie: 'guest_id=v1%3A172011140341399347; night_mode=2; guest_id_marketing=v1%3A172011140341399347; guest_id_ads=v1%3A172011140341399347; gt=1808904463656366514; g_state={"i_l":0}; kdt=VYrHTSkQmVitWhn1rS7QBBvqUerCzHApOTpCcHTb; auth_token=08dc99ee4971e689582e075f8cf422b37565cc89; ct0=c472986f1790c3a09db82c6c13abc021e13cc962d65b72fd353fb5a8f9fd2e7476f8570841b8c675e8c71c735f6d52dda9661098b28f1f1b26c684dd0a06c9297016ec2b5032a58c90c6d7cc21cb457e; att=1-r62oEFzLsmIYn6HGtaMjAmH2PM1n7bfwK25IawVX; lang=en; twid=u%3D1033655059026853888; personalization_id="v1_43r64+W18IOtJOxcOp6Dxg=="',
        Referer: 'https://x.com/hamsterfounder/status/1807443407335526610',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        'content-type': 'application/json',
        priority: 'u=1, i',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-client-transaction-id': 'URncW074ufbCZyiKQ2L/Xz67RY5e/eZ/UMugKrWWO9yNzAIWajpTISc6GJT1dhlTArn4oFCNirb6q1uT1nKx1mR4aYwiUg',
        'x-csrf-token': '6da3e5855d35de25301575bb87fefc94bb098a9fcf70e34bf2f2ce33ffafd880b121cc3aedbe4f0c7bd0c93b7e12948f8e0975547aa14c34cc02c096807466277c7449db95427e6690b63f31dca2d465',
        'x-twitter-active-user': 'yes',
        'x-twitter-auth-type': 'OAuth2Session',
        'x-twitter-client-language': 'en',
        cookie: 'guest_id_marketing=v1%3A171553857549987418; guest_id_ads=v1%3A171553857549987418; guest_id=v1%3A171553857549987418; gt=1789724619957785053; _ga=GA1.2.1393614285.1715538577; _gid=GA1.2.686132976.1715538577; _twitter_sess=BAh7BiIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7AA%253D%253D--1164b91ac812d853b877e93ddb612b7471bebc74; kdt=6D84wmJW2dMIpIs22KHKmVDcT2aK0Kk6lTx5eWBp; auth_token=c522beaf24bf2e265fd91c16427d2cf3086ef41e; ct0=6da3e5855d35de25301575bb87fefc94bb098a9fcf70e34bf2f2ce33ffafd880b121cc3aedbe4f0c7bd0c93b7e12948f8e0975547aa14c34cc02c096807466277c7449db95427e6690b63f31dca2d465; lang=en; twid=u%3D1789727098116112385; personalization_id="v1_UjgFvOiDTwUyOfU5RhjlFg=="',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
];
let headersIndex = 0;
const getPostInformation = (statusId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    try {
        const endpoint = `https://twitter.com/i/api/graphql/zJvfJs3gSbrVhC0MKjt_OQ/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${statusId}%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_media_interstitial_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%2C%22withArticlePlainText%22%3Afalse%7D`;
        const { data } = yield axios_1.default.get(endpoint, {
            headers: headers[headersIndex],
        });
        const information = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.threaded_conversation_with_injections_v2) === null || _b === void 0 ? void 0 : _b.instructions) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.entries) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.itemContent) === null || _h === void 0 ? void 0 : _h.tweet_results) === null || _j === void 0 ? void 0 : _j.result;
        const name = (_o = (_m = (_l = (_k = information === null || information === void 0 ? void 0 : information.core) === null || _k === void 0 ? void 0 : _k.user_results) === null || _l === void 0 ? void 0 : _l.result) === null || _m === void 0 ? void 0 : _m.legacy) === null || _o === void 0 ? void 0 : _o.name;
        const screen_name = (_s = (_r = (_q = (_p = information === null || information === void 0 ? void 0 : information.core) === null || _p === void 0 ? void 0 : _p.user_results) === null || _q === void 0 ? void 0 : _q.result) === null || _r === void 0 ? void 0 : _r.legacy) === null || _s === void 0 ? void 0 : _s.screen_name;
        const avatar = (_w = (_v = (_u = (_t = information === null || information === void 0 ? void 0 : information.core) === null || _t === void 0 ? void 0 : _t.user_results) === null || _u === void 0 ? void 0 : _u.result) === null || _v === void 0 ? void 0 : _v.legacy) === null || _w === void 0 ? void 0 : _w.profile_image_url_https;
        const full_text = (_x = information === null || information === void 0 ? void 0 : information.legacy) === null || _x === void 0 ? void 0 : _x.full_text;
        const bookmark_count = (_y = information === null || information === void 0 ? void 0 : information.legacy) === null || _y === void 0 ? void 0 : _y.bookmark_count;
        const favorite_count = (_z = information === null || information === void 0 ? void 0 : information.legacy) === null || _z === void 0 ? void 0 : _z.favorite_count;
        const quote_count = (_0 = information === null || information === void 0 ? void 0 : information.legacy) === null || _0 === void 0 ? void 0 : _0.quote_count;
        const reply_count = (_1 = information === null || information === void 0 ? void 0 : information.legacy) === null || _1 === void 0 ? void 0 : _1.reply_count;
        const retweet_count = (_2 = information === null || information === void 0 ? void 0 : information.legacy) === null || _2 === void 0 ? void 0 : _2.retweet_count;
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
    }
    catch (error) {
        console.log(error);
        if (headersIndex === headers.length - 1)
            headersIndex = 0;
        else
            headersIndex++;
    }
});
app.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield getPostInformation(id);
        res.send({ data });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ error });
    }
}));
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`);
});
