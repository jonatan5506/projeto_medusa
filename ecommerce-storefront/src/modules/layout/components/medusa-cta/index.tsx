import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
//futuro icone da ArgusTech

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      <span className="text-ui-fg-subtle">Desenvolvido por</span>
      <a
        href="https://www.medusajs.com"
        target="_blank"
        rel="noreferrer"
        className="transition-transform hover:scale-110"
      >
        <Medusa fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
    </Text>
  )
}

export default MedusaCTA
