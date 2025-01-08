<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
	import { firekitDocMutations } from "svelte-firekit";

  import Input from "$lib/components/ui/input/input.svelte";
  import { toast } from "svelte-sonner";
  import intlTelInput from "intl-tel-input";
  import { onMount } from "svelte";

	let {user}= $props();


  let phoneNumber = "";
  let haserror = false;
  let it: any = null;
  let _phone: any = { valid: false, value: "", error: "" };

  onMount(() => {
    const input: HTMLInputElement | null =
      document.querySelector("#phonenumberuser");
    if (input) {
      it = intlTelInput(input, {
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@24.7.0/build/js/utils.js",
        separateDialCode: true,
      });

      if (user?.phoneNumber) {
        it.setNumber(user.phoneNumber);
        phoneNumber = user.phoneNumber;
      }
    }
  });

  $effect(() => {
    if (user?.phoneNumber) {
      _phone.value = user.phoneNumber;
      phoneNumber = user.phoneNumber;

      if (it) {
        it.setNumber(user.phoneNumber);
      }
    }
  });

  async function handleChangePhoneNumber() {
    if (it) {
      _phone.value = it.getNumber();
      _phone.error = it.getValidationError();
      _phone.valid = it.isValidNumber();
    }

    if (!_phone.valid) {
      toast.error("Phone number invalid.");
      haserror = true;
      return;
    }

    if (_phone.value === user?.phoneNumber) {
      toast.error("The phone number is the same as your current phone number.");
      haserror = true;
      return;
    }

    await firekitDocMutations.update(`users/${user.uid}`,{ phoneNumber: _phone.value })
    toast.success("Phone number updated successfully.");
    haserror = false;
  }
</script>

<section class="space-y-5 border-t-slate-200 border-t-[2px] pt-4">
  <div class="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
    <div class="sm:col-span-4 xl:col-span-3">
      <p
        class="sm:mt-2.5 inline-block text-sm {haserror
          ? 'text-red-500'
          : 'text-foreground-500'}"
      >
        Phone number
      </p>
    </div>

    <div class="sm:col-span-8 lg:col-span-6">
      <div class="flex flex-wrap j items-center gap-3 sm:gap-5">
        <div class="flex gap-2 items-center w-full">
          <div class="flex flex-col gap-2 text-sm leading-tight">
            <div id="contentphone" class=" space-y-1 my-2">
              <Input
                id={"phonenumberuser"}
                bind:value={phoneNumber}
                name="phone"
                type="tel"
                class="input input-bordered w-full rounded  bg-transparent px-3  text-md border-[#DBDEE2]"
                onbeforeinput={(e:any) => {
                  if (
                    !/^\d*$/.test(e.data) &&
                    e.inputType !== "deleteContentBackward" &&
                    e.inputType !== "deleteContentForward"
                  ) {
                    e.preventDefault();
                  }
                }}
                placeholder="Phone number"
              />
            </div>
            <Button
              onclick={handleChangePhoneNumber}
              variant="default"
              class="block ml-auto"
            >
              Save
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</section>
