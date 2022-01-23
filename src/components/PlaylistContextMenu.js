import PLayListContextMenuItem from './PLayListContextMenuItem';



function PlaylistContextMenu({ classes, menuItems }) {
  return (
    <ul class={classes}>
      {menuItems.map(({ label, subMenuItems }) => 
      <PLayListContextMenuItem
        key={label}
        subMenuItems={subMenuItems}
      >
        {label}
      </PLayListContextMenuItem>)}

    </ul>
  )
}

export default PlaylistContextMenu;