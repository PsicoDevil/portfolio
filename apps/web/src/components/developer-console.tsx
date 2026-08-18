"use client";

import { type FormEvent, useMemo, useRef, useState } from "react";
import { consoleCommands, type ConsoleCommand } from "@/data/portfolio";

type ConsoleEntry = { input: string; output: string[]; isError?: boolean };

const welcomeLines = ["Portfolio developer console v1.0", "Escribí 'help' para ver los comandos disponibles."];
const commandResponses: Record<Exclude<ConsoleCommand, "clear">, string[]> = {
  help: ["Comandos: help, about, skills, stack, projects, experience, contact, clear"],
  about: ["Full Stack Developer | IT Analyst", "Perfil híbrido de software, automatización, integración, infraestructura y resolución de problemas."],
  skills: ["TypeScript · React · Angular · Next.js · Python · Django", "SQL · PostgreSQL · REST APIs · IT · automatización · integraciones"],
  stack: ["Frontend: React, Next.js, TypeScript, Angular", "Backend: Python, Django, Django REST Framework, Node.js", "Datos: PostgreSQL, MySQL, SQL Server"],
  projects: ["GameMate — e-commerce Full Stack", "TriviaGamer — aplicación Android", "Integraciones SAP Business One — automatización y Service Layer"],
  experience: ["Actualidad — CONFECAT", "Python Developer / SAP Business One Developer / IT Analyst", "Experiencia previa — IT Support / IT Analyst"],
  contact: ["Canal de contacto disponible en la sección Contacto.", "Usá la navegación para continuar la conversación."],
};

export function DeveloperConsole() {
  const [entries, setEntries] = useState<ConsoleEntry[]>([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestions = useMemo(() => consoleCommands.filter((command) => command.startsWith(value.trim().toLowerCase())), [value]);

  function execute(rawCommand: string) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") { setEntries([]); setValue(""); return; }
    if (consoleCommands.includes(command as ConsoleCommand)) {
      setEntries((current) => [...current, { input: command, output: commandResponses[command as Exclude<ConsoleCommand, "clear">] }]);
    } else {
      setEntries((current) => [...current, { input: rawCommand, output: [`Comando no reconocido: ${rawCommand}`, "Probá con 'help'."], isError: true }]);
    }
    setValue("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); execute(value); }

  return <div className="console-shell" onClick={() => inputRef.current?.focus()}>
    <div className="console-topbar"><div className="console-lights" aria-hidden="true"><span /><span /><span /></div><p>developer-console — local session</p><span className="console-status">ready</span></div>
    <div className="console-body" aria-live="polite">
      {welcomeLines.map((line) => <p key={line} className="console-muted">{line}</p>)}
      {entries.map((entry, index) => <div className="console-entry" key={`${entry.input}-${index}`}><p><span className="console-prompt">visitor@portfolio:~$</span> {entry.input}</p>{entry.output.map((line) => <p className={entry.isError ? "console-error" : "console-output"} key={line}>{line}</p>)}</div>)}
      <form className="console-form" onSubmit={handleSubmit}><label className="sr-only" htmlFor="console-command">Ingresá un comando de la consola</label><span className="console-prompt">visitor@portfolio:~$</span><input ref={inputRef} id="console-command" list="console-commands" value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck="false" placeholder="escribí help" /><datalist id="console-commands">{suggestions.map((command) => <option key={command} value={command} />)}</datalist></form>
    </div>
    <div className="console-footer" aria-label="Comandos sugeridos">{consoleCommands.slice(0, 5).map((command) => <button key={command} type="button" onClick={(event) => { event.stopPropagation(); execute(command); }}>{command}</button>)}</div>
  </div>;
}
