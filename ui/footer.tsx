export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  )
}
