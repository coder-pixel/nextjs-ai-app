import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-zinc-50 font-sans dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.18),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.22),_transparent_50%)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Next.js AI App
        </p>
        <Link
          href="/ui/stream"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Open playground
        </Link>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pb-16">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            Text completion
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
            Ask a question, get a completion.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A simple playground for streaming ideas into text. Write a prompt and
            see the model respond on the completion page.
          </p>
        </div>

        <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
          <Link
            href="/ui/completion"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Completion
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Send a prompt and read the full generated response.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>
          <Link
            href="/ui/stream"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Stream
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Watch tokens appear live as the model writes.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>
          <Link
            href="/ui/chat"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Chat
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Chat with model.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/structured-data"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Structured Data (Object)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Getting response from AI in a predefined structured way (Object)
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/structured-array"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Structured Data (Array)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Getting response from AI in a predefined structured way in terms of Array.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/structured-enum"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Structured Enum (Enum)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Getting response from AI in a predefined structured way in terms of Enum.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/multi-modal-chat"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Multi Modal Chat
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Interacting with both text and images!!
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/transcribe-audio"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Transcribe Audio
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Transcripting the audio to text.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/generate-speech"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Generate Speech (TTS)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Generate the speech from text.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/tools"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Basic Tools Call (With Hard coded data)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Call tools to do extra work.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/multiple-tools"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Multiple Tools Call (With Hard coded data)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  First Get the location info from the name and then get the weather.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/api-tool"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  API Tools Call (API: https://www.weatherapi.com/)
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Get real time weather information with the help of weather api.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/web-search-tool"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Web Search Tools Call
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Access internet via tool calling.
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/mcp-tools"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  MCP Tools
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Access tools made by other users (MCP library)
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/reasoning"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  AI Reasoning
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Visualize AI Reasoning while AI proccesses our request/text
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/ui/message-metadata"
            className="group block rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  Metadata
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Rendering Message Metadata
                </p>
              </div>
              <span className="mt-1 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500">
                →
              </span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
