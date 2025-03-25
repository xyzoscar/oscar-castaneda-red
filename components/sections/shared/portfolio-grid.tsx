import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Expense Tracker",
    description: "Monitor daily expenses easily",
    slug: "expense-tracker",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 2,
    title: "Invoice Manager",
    description: "Create and manage invoices fast",
    slug: "invoice-manager",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 3,
    title: "Budget Planner",
    description: "Set budgets and control spending",
    slug: "budget-planner",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 4,
    title: "Stock Analyzer",
    description: "Analyze real-time market trends",
    slug: "stock-analyzer",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 5,
    title: "Tax Calculator",
    description: "Calculate taxes with accuracy",
    slug: "tax-calculator",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 6,
    title: "Payroll System",
    description: "Automate employee payrolls easily",
    slug: "payroll-system",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 7,
    title: "Crypto Wallet",
    description: "Securely store and trade crypto",
    slug: "crypto-wallet",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 8,
    title: "Loan Manager",
    description: "Manage and track all loans",
    slug: "loan-Manager",
    imageUrl: "/images/placeholder.avif",
  },
  {
    id: 9,
    title: "Financial Dashboard",
    description: "Visualize financial KPIs clearly",
    slug: "financial-dashboard",
    imageUrl: "/images/placeholder.avif",
  },
];

export function PortfolioGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projectsData.map((project) => (
        <div key={project.id} className="overflow-hidden">
          <Link
            href={`/project/${project.slug}`}
            className="block group hover:cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="py-4">
              <h2 className="relative inline-block font-medium text-lg ">
                <span className="inline-block transition-colors duration-300">
                  {project.title}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-white">
                {project.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
