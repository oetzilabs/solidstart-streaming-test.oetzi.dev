import { useAction, useSubmission } from "@solidjs/router";
import { triggerTest } from "@/lib/test-action";
import { Button } from "../components/ui/button";
import { createSignal, Show } from "solid-js";
import Loader2 from "lucide-solid/icons/loader-2";
import { TextField, TextFieldRoot } from "../components/ui/textfield";

export default function Home() {
  const testAction = useAction(triggerTest);
  const status = useSubmission(triggerTest);

  const [name, setName] = createSignal("");
  return (
    <main class="flex flex-col gap-4 py-10 items-center justify-center h-screen w-screen">
      <TextFieldRoot value={name()} onChange={setName}>
        <TextField placeholder="Whats your name?"></TextField>
      </TextFieldRoot>
      <Button
        onClick={() => {
          const n = name();
          testAction(n);
        }}
      >
        Trigger Action
      </Button>
      <Show when={!status.pending} fallback={<Loader2 class="size-4 animate-spin" />}>
        <Show when={status.result} fallback={"Write something into the input and press the button above!"}>
          <span>{status.result}</span>
        </Show>
      </Show>
      <Button
        onClick={() => {
          status.clear();
          setName("");
        }}
      >
        Reset
      </Button>
    </main>
  );
}
