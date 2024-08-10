import { ref, onMounted, onUnmounted } from 'vue';

export function useResizable(elementRef, minWidth, maxWidth) {
  const isResizing = ref(false);
  const startX = ref(0);
  const startWidth = ref(0);

  const onMouseMove = (event) => {
    if (!isResizing.value) return;
    const newWidth = startWidth.value + event.clientX - startX.value;
    // window.getSelection()
    
    if (newWidth >= minWidth && newWidth <= maxWidth) {
      elementRef.value.style.width = `${newWidth}px`;
    }
  };

  const onMouseUp = () => {
    isResizing.value = false;
  };

  const onMouseDown = (event) => {
    isResizing.value = true;
    console.log(isResizing.value);
    startX.value = event.clientX;
    startWidth.value = elementRef.value.offsetWidth;
  };

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  });

  return {
    onMouseDown
  };
}
