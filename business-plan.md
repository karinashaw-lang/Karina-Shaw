# Business Plan — [Working Name]

## Executive Summary
A real-time, video-first home for creators and their communities — built for people who want to watch, listen, and hang out live, then keep, search, and revisit what they've found. The platform combines the best of live streaming (better than Twitch, built for more than gaming), the growth engine of short-form clips (competing with TikTok on virality), and a genuinely new capability neither offers: the ability to search inside any video ever posted, turn what you've watched into a personal library, and get it summarized into an audio briefing for your commute. Every piece of content is video-first but audio-optional by default, so nothing requires a screen to enjoy.

## Problem
- Twitch is built for gaming culture — its tools, discovery, and audience don't serve talk, cooking, podcasting, or general creator content well.
- YouTube is a general-purpose, VOD-first platform with live and shorts bolted on; it isn't built around real-time togetherness or personal curation.
- TikTok is fundamentally short-form and asynchronous — it has no live-native culture and no way to search inside content.
- No platform lets people search *inside* what they've watched — VODs and streams are effectively unsearchable once the moment passes.
- No platform helps people keep and revisit what they've found; every major platform is built to feed you more, not help you hold on to what mattered.
- Creators juggle separate tools for recording, hosting, clipping, monetization, and audience engagement — there's no single home for the full workflow.

## Solution
One platform covering the full creator and viewer loop:
- **Live or recorded**: go live (multi-guest, camera-first) or upload a pre-recorded video — talk shows, podcasts, cooking streams, IRL content, anything.
- **Audio-optional by default**: every piece of content automatically produces a video stream and an audio-only stream, so people can watch or just listen.
- **Optional visual mode**: creators can choose a "Studio Look" — real-time cinematic lighting and visual treatment — when recording or going live, entirely opt-in, with a normal/unfiltered mode as the default.
- **Clips, made two ways**: creators and viewers can both generate clips from any video or live stream, in real time during a broadcast or after the fact, built for easy external sharing.
- **The personal wall**: viewers build a private, curated collection of saved episodes and self-made clips pulled from across different creators — a personal library, not a feed.
- **Search inside everything**: transcript-powered search lets anyone find the exact moment something was said or shown, across a creator's entire back catalog of streams and episodes — then clip it instantly.
- **Commute briefing**: viewers can queue up videos they want to watch, and AI generates a summarized audio briefing they can listen to on the go — turning the personal wall into an active daily tool, not just an archive.
- **Community layer**: comments, follows, and posts attached to specific content keep engagement alive between live sessions.
- **Ask the show**: viewers can ask a question and get an answer pulled from across a creator's entire back catalog, with links to the exact moments it came from.
- **Moment-level recommendations**: surfaces related clips based on what was actually said or shown, not just show category or creator tags.
- **Auto-captioned clips**: every clip is automatically captioned and formatted for external sharing, built on the same transcript data used for search.
- **Scheduled listening parties**: viewers can synchronize playback of existing episodes at a set time with a shared chat, a low-cost way to get "watching together" before investing in full live infrastructure.
- **Direct monetization**: tips and (later) subscriptions pay creators directly.

## Target Market
- **Primary users:** creators making live or recorded talk, podcast, cooking, and IRL-style content who are underserved by gaming-first (Twitch) or general-purpose (YouTube) platforms.
- **Secondary users:** viewers who want to watch or listen live, discover and revisit content more easily than existing platforms allow, and search for specific moments across everything they follow.
- **Wedge entry point:** professional and semi-professional podcasters currently juggling separate tools for recording, hosting, clipping, and monetization — the initial beachhead audience, with the platform designed from day one to serve a broader range of creators as it grows.

## Product Differentiation
1. **The personal wall** — a curated, private collection of saved and self-made clips from across different creators, closer to a personal media library than a content feed. The hardest feature for algorithm-first platforms to casually copy, since it works against their engagement-maximizing incentives.
2. **Search inside video** — transcript-powered semantic search across a creator's full history of streams and episodes. Neither Twitch nor TikTok offer real search inside content; this makes every past stream permanently useful instead of disappearing after it airs.
3. **Real-time togetherness, built for more than gaming** — live streaming and co-watching built around talk, cooking, and everyday content, not gaming culture — the "hang out and watch someone live their life" energy Twitch pioneered, extended to a wider audience.
4. **Viewer-created clips + live clipping** — any viewer can clip a moment from a video or an in-progress live stream and save it privately or share it externally, always attributed back to the source. Solves the clip-supply problem for virality without requiring mature AI auto-clipping on day one.
5. **Commute briefing** — AI-generated audio summaries of videos a viewer has queued, ready to listen to on the go. Turns curation into a daily-use habit rather than a passive archive, and is genuinely novel — no platform currently turns a personal video queue into a daily audio briefing.
6. **Audio-optional by default** — every piece of talk-based content automatically produces a full audio-only stream, so the platform works whether someone is watching or just listening. (Inherently visual content like cooking or Studio Look streams remain video-first by nature.)
7. **Optional "Studio Look"** — a real-time cinematic lighting/visual mode creators can toggle on when recording or going live, entirely opt-in. Authenticity stays the default; polish becomes a creative choice, not a platform-imposed identity.
8. **Habit and identity features** — recap reels and streaks turn passive consumption into something personal and worth returning to.
9. **Direct, creator-first monetization** — tips and subscriptions pay creators directly from the people who value them, rather than routing through an ad-share model.
10. **Ask the show** — a question-answering layer over a creator's full catalog, built on transcript data already required for search. No major podcast or video platform offers this.
11. **Moment-level recommendations** — content-based discovery driven by what was actually said, not show metadata, surfacing connections between creators that category tags would miss.
12. **Personal notes on saved clips** — a one-line "why I saved this" on any wall item, turning the wall into something more personal and shareable, not just a bookmark list.

## Business Model
- Tips on live streams, videos, and clips (creator-first, transaction-based)
- Creator subscriptions for exclusive content or back-catalog access (added once the core loop is validated)
- Longer-term: an ad marketplace using platform-wide viewing/listening data, and payment infrastructure for creators (advances, revenue-based tools) as scale increases

## Go-to-Market Strategy
- Start narrow: recruit a small group of professional podcasters directly (outreach, not paid acquisition) who are already frustrated with juggling separate tools.
- Use their existing audiences as the initial user base — creators bring their listeners with them rather than the platform needing to generate demand from zero.
- Lean on clips (creator-made and viewer-made, including real-time clipping during live streams) as the organic growth loop: clips shared externally drive new viewers back to full episodes, live streams, and creator profiles.
- Expand from professional podcasters to a broader range of creators — cooking streamers, IRL/talk streamers, semi-professional and hobbyist creators — once the core product and monetization are proven, without requiring a repositioning of the platform's identity.

## Build Philosophy: Rent Infrastructure, Build Differentiation
Every major platform capability below has a cheap, off-the-shelf way to stand it up and an expensive, custom way to build it. The plan defaults to renting commodity infrastructure (video hosting, transcription, live delivery, payments) via existing APIs, and spending engineering time only on the pieces that are actually differentiated (the wall, search, ask-the-show, recommendations). This keeps V1 buildable by a small team or solo founder, and keeps each later stage's cost tied to usage rather than a large upfront infrastructure bill.

- **Transcription**: off-the-shelf speech-to-text (e.g., Whisper), not custom-built.
- **Search**: keyword/vector search on top of transcripts using standard tools (e.g., Postgres full-text search or a hosted vector database), not a custom search engine.
- **Commute briefing**: transcript → LLM summary → text-to-speech, chained API calls, no new infrastructure beyond what search already requires.
- **Payments**: a payments platform with built-in creator payouts and tax handling (e.g., Stripe Connect), not custom payment infrastructure.
- **Live streaming**: a live-streaming API (ingest, transcoding, delivery) rather than in-house video infrastructure — see the tiered live rollout below.
- **Real-time chat / listening parties**: a hosted real-time messaging service, not custom WebSocket infrastructure.

## Roadmap

**V1 — Prove the core loop (single content type, cheapest to build)**
- Focus on one content type at launch (podcasts, the original wedge) rather than podcasts, cooking, and IRL content simultaneously — same infrastructure supports the others later, but scoping to one keeps V1 lean.
- Creator profiles, upload/record flow (no live yet), automatic audio + video split, manual clipping, viewer-created private clips, auto-captioned clips.
- Transcript-powered search and "ask the show," brought forward into V1 since both are built on transcription already required for the audio split — cheap to include early, and core to the differentiation.
- Personal wall with notes on saved items, moment-level recommendations, comments and posts attached to content, follows, tips (via Stripe Connect), basic creator dashboard.

**V2 — Live streaming and togetherness, rolled out in tiers**
- **Tier 1 (near-zero cost):** scheduled listening parties — synchronized playback of existing episodes at a set time, with shared real-time chat. Validates demand for togetherness before spending on live infrastructure.
- **Tier 2 (usage-based cost):** real one-to-many live broadcasting via a live-streaming API — creators go live, viewers watch and chat, real-time viewer clipping during the stream. Cost scales with actual streaming usage rather than requiring upfront infrastructure spend.
- Subscriptions.
- AI-automated clip/highlight detection layered on top of the existing transcript pipeline.
- Commute briefing extended to include queued live-stream VODs, not just uploaded episodes.
- Recap reels, streaks, guest-following.
- Expansion to additional content types (cooking, IRL, talk) once the core loop and live tier 1/2 are validated — same infrastructure, broader creator base.

**V3 — Higher-cost, higher-risk additions (only after V1/V2 traction and revenue)**
- **Tier 3 live (highest cost):** multi-guest "same room" native recording and low-latency interactive live, built on WebRTC infrastructure (e.g., LiveKit) — the most expensive live capability, pursued only once live tiers 1–2 have proven demand.
- Real-time cinematic "Studio Look" relighting — deferred from earlier plans due to compute cost; a cheap client-side filter/color-grade can serve as a lightweight stand-in if visual differentiation is wanted sooner.
- Real-time or near-live AI dubbing with voice cloning (via third-party providers, not built in-house).
- Standalone open text/thought feed and full public/open social feed expansion beyond content-attached comments — held until moderation infrastructure and revenue justify the operational cost.

## Competitive Landscape
- **Twitch:** dominant in live streaming, but gaming-first culture, tools, and discovery; VODs are largely unsearchable and disappear from relevance quickly; no personal curation layer.
- **YouTube:** dominant in video and increasingly in podcasting, but general-purpose, VOD-first with live bolted on, algorithm-first discovery, and no meaningful in-video search or personal curation.
- **TikTok:** dominant in short-form virality, but fundamentally asynchronous — no live-native culture, no search inside content, and no lasting personal archive.
- **Spotify/Apple Podcasts:** dominant in audio distribution, weaker in video, live, and community/curation features.
- **Patreon/Substack:** strong on creator monetization, weak or absent on native video, live, clipping, and discovery.
- **Riverside/Squadcast:** strong on recording, but not a destination platform — no audience, discovery, or monetization layer.
- **The opportunity:** the gap between these platforms — a single home combining real-time togetherness, searchable video archives, personal curation, short-form virality, and direct creator monetization — is not one any single incumbent is structurally positioned to fill without undermining their existing model.

## Key Risks
- **Adoption risk:** creators may treat the platform as "one more place to crosspost" rather than their primary home, undermining the network effects the model depends on.
- **Cold-start risk:** value depends on having both creators and engaged viewers early; viewer-created clips, live clipping, and direct outreach to creators are designed to mitigate this, but it remains the central early risk.
- **Scope risk:** the platform now spans several major surfaces — live, on-demand video, search, clipping, a personal wall, and eventually an open text feed. Sequencing (V1 → V2 → V3) is designed to manage this, but scope must be actively guarded against, not just planned around.
- **Technical/infra risk:** live streaming and AI dubbing remain the most complex and costly pieces to execute well even when rented rather than built in-house; the tiered live rollout and reliance on off-the-shelf transcription/search infrastructure reduce but don't eliminate this risk, particularly at the multi-guest, low-latency tier.
- **Positioning risk:** blending "authentic, unedited" content with an optional polished "Studio Look" mode requires clear framing (opt-in, not platform-imposed) to avoid diluting the authenticity positioning that differentiates the platform from YouTube's polish-optimized culture.
- **Competitive response:** incumbents (YouTube, Twitch, TikTok) are actively investing in live, video podcasting, and AI features, and could narrow the gaps this plan is built around; timing and depth of execution on search and the personal wall are the main defenses, since these are the features most misaligned with incumbents' existing business models.
- **Moderation risk:** any open commenting, posting, live chat, or clipping feature introduces moderation needs that scale with usage. This grows substantially with live streaming (V2) and further with an open text feed (V3), and must be planned for at each stage, not bolted on after growth.

## Team & Execution Notes
- V1, scoped to a single content type and built on rented infrastructure (transcription, search tooling, payments), is realistically buildable by a small team or a solo founder using AI-assisted development tools — this is a cost and time question, not a novel-technology question.
- V2's tiered live rollout is designed to defer cost: tier 1 (listening parties) is cheap and validates demand; tier 2 (real live broadcast via a rented live-streaming API) only requires spend once tier 1 shows people want to watch together, and that spend scales with usage rather than requiring a large upfront build.
- V3 features (multi-guest low-latency live, AI dubbing, real-time relighting, an open social feed) are both the most technically demanding and the most operationally demanding (moderation, community management) additions, and should only be pursued once the core loop, live tiers 1–2, and revenue are proven at V1/V2 scale.
- Direct relationships with early creator users are the most important non-technical execution priority — the plan depends on real adoption, not just a working product.
