import Link from 'next/link';

const Header = () => {
    return (
        <ul className="flex gap-x-2 underline mb-5">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/parent1">Parent 1</Link>
            </li>
            <li>
                <Link href="/parent1/child1">Parent 1 Child 1</Link>
            </li>
            <li>
                <Link href="/parent1/child2">Parent 1 Child 2</Link>
            </li>
            <li>
                <Link href="/parent2">Parent 2</Link>
            </li>
            <li>
                <Link href="/parent3">Parent 3</Link>
            </li>
        </ul>
    )
}

export default Header;