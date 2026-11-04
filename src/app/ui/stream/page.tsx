"use client";

import { useCompletion } from "@ai-sdk/react";
import Link from "next/link";
import { useState } from "react";

const CompletionStreamPage = () => {
  const [lastPrompt, setLastPrompt] = useState("");
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    stop,
    setInput,
  } = useCompletion({
    api: "/api/stream",
  });

  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Stream
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Watch the response appear token by token
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-36 pt-8">
        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
            {error.message}
          </div>
        )}

        {!lastPrompt && !completion && !isLoading && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
              ~
            </div>
            <h1 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Stream a completion
            </h1>
            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Send a prompt and the model text will fill in live as it is
              generated.
            </p>
          </div>
        )}

        {(lastPrompt || completion || isLoading) && (
          <div className="flex flex-col gap-4">
            {lastPrompt && (
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-zinc-900 px-4 py-3 text-sm leading-6 text-white dark:bg-zinc-100 dark:text-zinc-950">
                {lastPrompt}
              </div>
            )}

            {isLoading && !completion && (
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-400 [animation-delay:300ms]" />
                </span>
              </div>
            )}

            {completion && (
              <div className="mr-auto max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-md border border-zinc-200 bg-white px-4 py-3 text-sm leading-6 text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                {completion}
                {isLoading && (
                  <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-indigo-500 align-middle" />
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            setLastPrompt(input.trim());
          }
          setInput("");
          handleSubmit(e);
        }}
        className="fixed inset-x-0 bottom-0 border-t border-zinc-200 bg-white/95 p-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95"
      >
        <div className="mx-auto flex w-full max-w-3xl gap-2">
          <input
            className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-zinc-800 dark:bg-zinc-900 dark:placeholder:text-zinc-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20"
            value={input}
            onChange={handleInputChange}
            placeholder="How can I help you?"
            disabled={isLoading}
          />
          {isLoading ? (
            <button
              type="button"
              onClick={stop}
              className="rounded-xl bg-red-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!input.trim()}
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CompletionStreamPage;
