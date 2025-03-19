import React from 'react';

export default function MobileMenuIcon({
  isOpen,
  onOpen
}: {
  isOpen: boolean;
  onOpen: () => void;
}) {
  return !isOpen ? (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onOpen}
    >
      <path
        d="M0 3.57143C0 1.59598 1.59598 0 3.57143 0H46.4286C48.404 0 50 1.59598 50 3.57143C50 5.54688 48.404 7.14286 46.4286 7.14286H3.57143C1.59598 7.14286 0 5.54688 0 3.57143ZM0 21.4286C0 19.4531 1.59598 17.8571 3.57143 17.8571H46.4286C48.404 17.8571 50 19.4531 50 21.4286C50 23.404 48.404 25 46.4286 25H3.57143C1.59598 25 0 23.404 0 21.4286ZM50 39.2857C50 41.2612 48.404 42.8571 46.4286 42.8571H3.57143C1.59598 42.8571 0 41.2612 0 39.2857C0 37.3103 1.59598 35.7143 3.57143 35.7143H46.4286C48.404 35.7143 50 37.3103 50 39.2857Z"
        fill="#292929"
      />
    </svg>
  ) : (
    <svg
      width="50"
      height="50"
      viewBox="0 0 43 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onOpen}
    >
      <path
        d="M42.0299 5.86094C43.2909 4.3432 43.09 2.08892 41.5723 0.827867C40.0546 -0.433191 37.8003 -0.232315 36.5392 1.28542L21.4289 19.4201L6.31849 1.28542C5.05743 -0.232315 2.80315 -0.433191 1.28542 0.827867C-0.232314 2.08892 -0.433191 4.3432 0.827867 5.86094L16.7752 25L0.827867 44.1391C-0.433191 45.6568 -0.232314 47.9111 1.28542 49.1721C2.80315 50.4332 5.05743 50.2323 6.31849 48.7146L21.4289 30.5799L36.5392 48.7146C37.8003 50.2323 40.0546 50.4332 41.5723 49.1721C43.09 47.9111 43.2909 45.6568 42.0299 44.1391L26.0825 25L42.0299 5.86094Z"
        fill="#292929"
      />
    </svg>
  );
}
