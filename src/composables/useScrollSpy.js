import { onMounted, onUnmounted, ref } from 'vue'

// Tracks which section is in the reading band of the viewport.
export function useScrollSpy(ids) {
  const activeId = ref(ids[0])
  let observer

  const onScroll = () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (atBottom) activeId.value = ids[ids.length - 1]
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activeId.value = e.target.id
        })
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', onScroll)
  })

  return activeId
}
