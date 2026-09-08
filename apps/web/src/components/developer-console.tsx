"use client";

import { type FormEvent, useMemo, useRef, useState } from "react";
import { consoleCommands, type ConsoleCommand } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionaries/es";

type ConsoleEntry = { input: string; output: string[]; isError?: boolean };

type DeveloperConsoleProps = { content: Dictionary["console"] };

export function DeveloperConsole({ content }: DeveloperConsoleProps) {
  const [entries, setEntries] = useState<ConsoleEntry[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestions = useMemo(() => consoleCommands.filter((command) => command.startsWith(value.trim().toLowerCase())), [value]);

  function execute(rawCommand: string) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") { setEntries([]); setValue(""); return; }
    if (consoleCommands.includes(command as ConsoleCommand)) {
      setEntries((current) => [...current, { input: command, output: content.responses[command as Exclude<ConsoleCommand, "clear">] }]);
    } else {
      setEntries((current) => [...current, { input: rawCommand, output: [content.unknownCommand.replace("{command}", rawCommand), content.tryHelp], isError: true }]);
    }
    setValue("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); execute(value); }

  return <div className="console-shell" onClick={() => inputRef.current?.focus()}>
    <div className="console-topbar"><div className="console-lights" aria-hidden="true"><span /><span /><span /></div><p>developer-console - local session</p><span className="console-status">ready</span></div>
    <div className="console-body" aria-live="polite">
      {content.welcome.map((line) => <p key={line} className="console-muted">{line}</p>)}
      {entries.map((entry, index) => <div className="console-entry" key={`${entry.input}-${index}`}><p><span className="console-prompt">visitor@portfolio:~$</span> {entry.input}</p>{entry.output.map((line) => <p className={entry.isError ? "console-error" : "console-output"} key={line}>{line}</p>)}</div>)}
      <form className="console-form" onSubmit={handleSubmit}><label className="sr-only" htmlFor="console-command">{content.inputLabel}</label><span className="console-prompt">visitor@portfolio:~$</span><input ref={inputRef} id="console-command" list="console-commands" value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck="false" placeholder={content.placeholder} /><datalist id="console-commands">{suggestions.map((command) => <option key={command} value={command} />)}</datalist></form>
    </div>
    <div className="console-footer" aria-label={content.suggestedAria}>{consoleCommands.slice(0, 5).map((command) => <button key={command} type="button" onClick={(event) => { event.stopPropagation(); execute(command); }}>{command}</button>)}</div>
  </div>;
}
