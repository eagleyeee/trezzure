<script lang="ts">
	interface Props {
		title: string;
		link: string;
	}
	let { title, link }: Props = $props();
</script>

<a
	href={link}
	aria-label={title}
	class="box-border inline-block h-[34px] w-full border border-solid border-[#505050] bg-primary text-center align-middle text-xs font-bold uppercase leading-[34px] tracking-[2px] text-white hover:border-white"
	>{title}</a
>
